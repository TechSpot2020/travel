import React, { Component } from "react";
import GoldAcc from "./GoldAcc";
import GoldConfirm from "./GoldConfirm";
import GoldPayForm from "./GoldPayForm";

export class GoldCOForm extends Component {
  state = {
    step: 1,
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { name, email, phone, password } = this.state;
    const values = { name, email, phone, password };

    switch (step) {
      case 1:
        return (
          <GoldAcc
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      // case 2:
      //   return (
      //     <Card
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       inputChange={this.inputChange}
      //       values={values}
      //     />
      //   );
      case 2:
        return (
          <GoldConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 3:
        return <GoldPayForm prevStep={this.prevStep} values={values} />;
    }
  }
}

export default GoldCOForm;
