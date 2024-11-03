import bcrypt from "bcrypt";
const encryptPassword = async (password: string) => {
  try {
    const saltRounds = 12;
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const checkPassword = async (password:string | undefined | null,hashedPassword:string) => {
    try {
        console.log(hashedPassword, " -- ",password)
        if(password == undefined || password == null) return false;

        return await bcrypt.compare(password, hashedPassword);        
      } catch (err: any) {
        throw new Error(err.message);
      }    
}
export default { encryptPassword, checkPassword };
