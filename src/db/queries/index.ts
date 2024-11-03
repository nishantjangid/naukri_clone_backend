import prisma from "../../config/db.config";

class Query {
    private modelDelegates = {
        user: prisma.user || prisma.post, // Add other models as necessary
    } as const;
    
    // CREATE DATA QUERY
    async create<Model extends keyof typeof this.modelDelegates>(model:Model,data:any,select:any){
        let result = await prisma[model].create({
            data,
            select:{
                ...select
            }
        });
        prisma.$disconnect();
        return result;
    }

    // GET SINGLE RECORD BASED ON CONDITION
    async readOne<Model extends keyof typeof this.modelDelegates>(model:Model,where:any = {},select:any = {}){
        let result = await prisma[model].findFirst({
            ...(Object.entries(where).length && {where:{...where}}),
            ...(Object.entries(select).length && {select:{...select}})
        });
        prisma.$disconnect();
        return result;
    }

    // GET MANY RECORDS BASED ON CONDITION
    async readMany<Model extends keyof typeof this.modelDelegates>(model:Model,where:any,select:any){
        let result = await prisma[model].findMany({
            ...(Object.entries(where).length && {where:{...where}}),
            ...(Object.entries(select).length && {select:{...select}})
        });
        prisma.$disconnect();
        return result;
    }    
}

export default Query;
