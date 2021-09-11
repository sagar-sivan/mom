const emailValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameValidate = /^[a-zA-Z- \u0600-\u06FF]+$/;
const phoneValidate = /^[0-9]{8}$/;
const phoneNumberCheck = /^\+[0-9]*$/;
const numberCheck = /^[0-9]*$/;
const alphaNumeric = /^[a-z0-9]+$/i;

export {
    emailValidate
}