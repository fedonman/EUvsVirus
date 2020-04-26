import React, { Component } from "react";
import { Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import { BottomNavigation } from "../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../components/wizard/TopNavigation";

class LastStepEnd extends Component {
    constructor(props) {
        super(props);
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
        this.topNavClick = this.topNavClick.bind(this);
        this.state = {
            bottomNavHidden: false,
            topNavDisabled: false,

            name: "",
            email: "",
            password: "",
        }
    }

    topNavClick(stepItem, push) {
        if (this.state.topNavDisabled) {
            return;
        }
        push(stepItem.id);
    }

    onClickNext(goToNext, steps, step) {
        step.isDone = true;
        if (steps.length - 2 <= steps.indexOf(step)) {
            this.setState({ bottomNavHidden: true, topNavDisabled: true });
        }
        if (steps.length - 1 <= steps.indexOf(step)) {
            return;
        }
        goToNext();
    }

    onClickPrev(goToPrev, steps, step) {
        if (steps.indexOf(step) <= 0) {
            return;
        }
        goToPrev();
    }

    render() {
        const { messages } = this.props.intl;
        return (
            <Card>
                <CardBody className="wizard wizard-default">
                    <Wizard>
                        <TopNavigation className="justify-content-center" disableNav={false} topNavClick={this.topNavClick} />
                        <Steps>
                            <Step id="step1" name={messages["lottery.step-name-1"]} desc={messages["lottery.step-desc-1"]}>
                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                {this.state.amount || 5} <IntlMessages id="lottery.amount" />
                                            </Label>
                                            <Input type="range" min="1" max="100" step="1" name="name" value={this.state.amount || 5} onChange={(e) => { this.setState({ amount: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>
                            </Step>
                            <Step id="step2" name={messages["lottery.step-name-2"]} desc={messages["lottery.step-desc-2"]}>
                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="lottery.name" />
                                            </Label>
                                            <Input type="text" name="name" placeholder={messages["forms.name"]} value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="step3" name={messages["lottery.step-name-3"]} desc={messages["lottery.step-desc-3"]}>

                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="lottery.email" />
                                            </Label>
                                            <Input type="email" name="email" placeholder={messages["forms.email"]} value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                            {/* <Input type="password" name="password" placeholder={messages["forms.password"]} value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} /> */}
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="step4" hideTopNav={true}>
                                <div className="wizard-basic-step text-center">
                                    <h2 className="mb-2"><IntlMessages id="lottery.content-thanks" /></h2>
                                    <p><IntlMessages id="lottery.registered" /></p>
                                </div>
                            </Step>
                        </Steps>
                        <BottomNavigation onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className={"justify-content-center " + (this.state.bottomNavHidden && "invisible")} prevLabel={messages["lottery.prev"]} nextLabel={messages["lottery.next"]} />
                    </Wizard>
                </CardBody>
            </Card>

        );
    }
}
export default injectIntl(LastStepEnd)
