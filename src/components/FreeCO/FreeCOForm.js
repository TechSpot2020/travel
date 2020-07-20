import React, { Component } from "react";
import FreeAcc from "./FreeAcc";
import FreeConfirm from "./FreeConfirm";
import FreePayForm from "./FreePayForm";

export class FreeCOForm extends Component {
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
          <FreeAcc
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
          <FreeConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 3:
        return <FreePayForm prevStep={this.prevStep} values={values} />;
    }
  }
}

export default FreeCOForm;
