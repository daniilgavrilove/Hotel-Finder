import {FC, useEffect, useMemo, useRef, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {RentModalProps, STEPS} from './RentModal.props'
import {Modal} from "@/shared/ui/Modal/Modal";
import {useAppDispatch, useAppSelector} from "@/shared/lib/hooks/redux";
import {onRentModalClose} from "../../model/slices/rentModalSlice";
import styles from './RentModal.module.scss'
import {Heading} from "@/shared/ui/Heading/Heading";
import {categories} from "@/widgets/Navbar/ui/Categories/Categories";
import {CategoryInput} from "@/entities/CategoryInput";
import {CountrySelect} from "@/entities/CountrySelect";
import {YandexMap} from "@/entities/YandexMap";
import {Counter} from "@/entities/Counter";
import {ImageUpload} from "@/entities/ImageUpload";
import {Input} from "@/shared/ui/Input/Input";
import {listingAPI} from "../../model/api/listingApi";
import {IFetchError} from "@/shared/api/types/IError";


export const RentModal: FC<RentModalProps> = (props) => {

    const {className} = props

    const [createListing, {isLoading,error,isError,isSuccess}] = listingAPI.useCreateOneListingMutation()
    const creationError = error as IFetchError

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state=>state.auth)
    const {isOpen}=useAppSelector(state=>state.rentModal)

    const [step, setStep] = useState<STEPS>(STEPS.CATEGORY);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            locationValue: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            images: [],
            price: 1,
            title: '',
            description: '',
        }
    });

    const locationValue = watch('locationValue');
    const category = watch('category');
    const guestCount = watch('guestCount');
    const roomCount = watch('roomCount');
    const bathroomCount = watch('bathroomCount');
    const images = watch('images');
    const price = watch('price')
    const title = watch('title')
    const description = watch('description')

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    const onBack = () => {
        setStep((value) => value - 1);
    }

    const onNext = () => {
        setStep((value) => value + 1);
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.PRICE) {
            return onNext();
        }
        const formData = new FormData()
        formData.append('locationValue', locationValue?.label)
        formData.append('guestCount', guestCount)
        formData.append('roomCount', roomCount)
        formData.append('bathroomCount', bathroomCount)
        formData.append('price', price)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('category', category)
        if(user) formData.append('propertyId', String(user?.property?.id))
        Array.from(watch('images')).forEach((e: any) => formData.append('images', e))
        return createListing(formData)

    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Listing is created!')
            reset()
        }
        if (isError) {
            toast.error(creationError && creationError?.data?.message)
        }
    }, [isSuccess,isError,creationError,reset]);


    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Create'
        }

        return 'Next'
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined
        }

        return 'Back'
    }, [step]);

    let bodyContent = (
        <div className={styles.body} >
            <Heading
                title="Which of these best describes your place?"
                subtitle="Pick a category"
            />
            <div className={styles.categories} >
                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput
                            onClick={(category) =>
                                setCustomValue('category', category)}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
    if (step === STEPS.LOCATION){
        bodyContent = (
            <div className={styles.body}  >
                <Heading
                    title="Where is your place located?"
                    subtitle="Help guests find you!"
                />
                <CountrySelect
                    onChange={value => setCustomValue('locationValue', value)}
                               value={locationValue}/>
                {/* <Map */}
                {/*    zoom={location?.latlng ? 4 : 1} */}
                {/*    center={ location?.latlng } */}
                {/* /> */}
                <YandexMap center={locationValue?.latlng} zoom={locationValue?.latlng ? 4 : 1}/>

            </div>
        )
    }
    if (step === STEPS.INFO){
        bodyContent = (
            <div className={styles.body} >
                <Heading
                    title="Share some basics about your place"
                    subtitle="What amenities do you have?"
                />
                <Counter
                    title="Guests"
                    subtitle="How many guests do you allow?"
                    value={guestCount}
                    onChange={(value) => setCustomValue('guestCount', value)}
                />
                <hr/>
                <Counter
                    onChange={(value) => setCustomValue('roomCount', value)}
                    value={roomCount}
                    title="Rooms"
                    subtitle="How many rooms do you have?"
                />
                <hr />
                <Counter
                    onChange={(value) => setCustomValue('bathroomCount', value)}
                    value={bathroomCount}
                    title="Bathrooms"
                    subtitle="How many bathrooms do you have?"
                />
            </div>
        )
    }
    
    if (step === STEPS.IMAGES){
        bodyContent = (
            <div className={styles.body} >
                <Heading
                    title="Add a photo of your place"
                    subtitle="Show guests what your place looks like!"
                />
                <ImageUpload 
                    multiple
                    maxFiles={10}
                    label="Upload"
                    value={images}
                    error={errors.imageSrc?.message}
                             onChange={value => setCustomValue('images',value)}/>
            </div>
        )
    }

    if (step === STEPS.DESCRIPTION){
        bodyContent = (
            <div className={styles.body} >
                <Heading
                    title="How would you describe your place?"
                    subtitle="Short and sweet works best!"
                />
                <Input
                    id="title"
                    label="Title"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                <Input
                    id="description"
                    label="Description"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        )
    }
    
    if (step === STEPS.PRICE) {
        bodyContent = (
            <div className={styles.body} >
                <Heading
                    title="Now, set your price"
                    subtitle="How much do you charge per night?"
                />
                <Input
                    id="price"
                    label="Price"
                    formatPrice
                    type="number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        )
    }

    return (
      <Modal

        disabled={isLoading}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        isOpen={isOpen}
        onClose={()=>dispatch(onRentModalClose())}
        onSubmit={handleSubmit(onSubmit)}
        title="Airbnb your home!"
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        body={bodyContent}

      />
    );
};