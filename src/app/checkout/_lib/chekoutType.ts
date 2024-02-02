type InputTextField = {
    value: string;
    valid: boolean
}

export type FormProps = {
    name: InputTextField;
    email: InputTextField;
    phone: InputTextField;
    address: InputTextField;
    zipCode: InputTextField;
    city: InputTextField;
    country: InputTextField;
    payMethod: {value: 'eMoney' | 'cash', valid: true};
    eMoneyNumber: InputTextField;
    eMoneyPin: InputTextField;
}