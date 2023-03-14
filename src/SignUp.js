import CustomerInfoForm from "./components/CustomerInfoForm"

export default function SignUp(props) {
  return (
    <section className="sign-up">
        <h1>Personal Information</h1>
        <CustomerInfoForm info={props.info}/>
    </section>
  )
}
