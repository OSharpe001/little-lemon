

export default function CustomerDeliveryForm(props) {
  return (
    <section className="form">

        <label htmlFor="address">Address <sup>*</sup></label>
        <input
        type="text"
        id="address"
        name="address"
        placeholder="123 Smith St."
        value={props.delivery.address}
        onChange={props.delivery.handleAddressChange}
        onBlur={props.delivery.handleAddressChange}
        />
        {props.delivery.addressError?<p className="error-message">{props.delivery.addressError}</p>:null}
        
        <label htmlFor="city">City <sup>*</sup></label>
        <input
        type="text"
        id="city"
        name="city"
        placeholder="Brooklyn"
        value={props.delivery.city}
        onChange={props.delivery.handleCityChange}
        onBlur={props.delivery.handleCityChange}
        />
        {props.delivery.cityError?<p className="error-message">{props.delivery.cityError}</p>:null}
        

        {/* CHANGE STATE TO A SELECTION BOX WITH ONLY 10 OPTIONS SHOWING AT A TIME */}
        
        <label htmlFor="state">State <sup>*</sup></label>
        <input
        type="text"
        id="state"
        name="state"
        // value={props.delivery.address}
        // onChange={props.delivery.handleAddressChange}
        // onBlur={props.delivery.handleAddressChange}
        />
        {/* {props.delivery.addressError?<p className="error-message">{props.delivery.addressError}</p>:null} */}
        
        <label htmlFor="zip-code">Zip/Postal Code <sup>*</sup></label>
        <input
        type="number"
        id="zip-code"
        name="zip-code"
        placeholder="12345"
        value={props.delivery.zipCode}
        onChange={props.delivery.handleZipCodeChange}
        onBlur={props.delivery.handleZipCodeChange}
        />
        {props.delivery.zipCodeError?<p className="error-message">{props.delivery.zipCodeError}</p>:null}
        
    </section>
  )
}
