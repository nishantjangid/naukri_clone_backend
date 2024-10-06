const PrismaError = (code:string,error:any) => {
    let message = "";
    console.log(code," code --------")
    switch(code){
        case "P2002":
            message = `Unique constraint failed: ${error.meta?.target} in ${error.meta?.modelName} model`
            break;
        case 'P2001':
            message = `The record searched for in the where condition does not exist :  ${error.meta?.target} in ${error.meta?.modelName}`
    }

    return message;
}

export default PrismaError;