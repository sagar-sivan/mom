import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import queryString from "query-string"
import { withRouter } from "react-router-dom"


import Footer from '../../components/footer'
import Header from '../../components/header'
import PaymentSummary from '../payment_summary/paymentSummary'
import CommonAction from "./../../action/common_action"
import { networkRequest } from "../../http/api"
import { api_url, urlConfig } from "../../http/apiConfig"

const PaymentStatus = (props) => {
    const dispatch = useDispatch()
    const parsed = queryString.parse(props.location.search);
    useEffect(() => {
        // let selectedAllergies = localStorage.getItem("selectedAllergies")
        // if (selectedAllergies)
        //     selectedAllergies = JSON.parse(selectedAllergies)
        UpdatePaymentStatus()
        let formData = localStorage.getItem("formData")
        if (formData)
            formData = JSON.parse(formData)
        dispatch(CommonAction.paymentSummaryModal({
            isVisible: true, ...formData
        }))
    }, [])
    const UpdatePaymentStatus = async () => {
        try {
            const data = {
                orderIdTemp: parsed.orderid,
                "PaymentStatus": "S",
                "PaymentRefNo": parsed.ref,
                "PaymentTransactionNumber": "vbvbvsdsd"
            }
            const url = `${api_url}${urlConfig.updatePaymentStatus}`;
            const result = await networkRequest({ url, method: "POST", data })
            // if (result.responseCode == 0) {
            //     setCouponData(result)
            // } else {
            //     error.coupon = "Invalid coupon";
            //     setError({ ...error })
            // }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Header />
            <PaymentSummary />
            <Footer />
        </>
    )
}

export default withRouter(PaymentStatus)
