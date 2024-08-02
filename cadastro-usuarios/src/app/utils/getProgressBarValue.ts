import zxcvbn from "zxcvbn"

export const getProgressBarValue = (value:string):number => {
    const valueStrength = zxcvbn(value);

    if(valueStrength.score <= 2) {
        return 30;

    }else if(valueStrength.score <= 3 ) {
        return 60;
    }


    return 100;
}