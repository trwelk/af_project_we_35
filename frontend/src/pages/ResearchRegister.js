import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ResearcherForm from '../components/researchRegistration/ResearcherForm';
import ResearchPaperUpload from '../components/researchRegistration/ResearchPaperUpload';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../redux/constants/action-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto",
    backgroundImage: "url(https://cdn.wallpapersafari.com/49/20/acu0rZ.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh"
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Register Researcher', 'Upload Research Paper'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ResearcherForm/>;
    case 1:
        return <ResearchPaperUpload/>;
    default:
      return 'Unknown step';
  }
}

export default function ResearchRegister() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  if(globalState.enduser.next){
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch({
      type: ActionTypes.RESEARCHER_REGISTER_NEXT,
      payload: ""
    });
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
      </div>
    </div>
  );
}
