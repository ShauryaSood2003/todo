import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

export async function insertUser(username:string,password:string,firstname:string,lastname:string) {
    const res=await prisma.user.create({
        data:{
            username,
            password,
            firstname,
            lastname
        }
    })
    return res;
}

export async function updateUser(username:string,firstname:string,lastname:string){
    const res=await prisma.user.update({
        where:{
            username
        },
        data:{
            firstname,
            lastname
        }
    })
}
export async function getUser(username: string,password:string) {
    const user = await prisma.user.findFirst({
      where: {
          username: username,
          password:password
      },
      select:{
        id:true,
        username:true
      }
    })
    return user;
  }
export async function getUserSignUp(username: string) {
    const user = await prisma.user.findFirst({
        where: {
            username: username
        },
        select:{
        id:true,
        username:true
        }
    })
    return user;
}

export async function deletrUser(username:string) {
    const res=await prisma.user.delete({
        where:{
            username
        }
    })
}
export async function deletrTodos(id:number) {
    const res=await prisma.todos.delete({
        where:{
            id
        }
    })
}

export async function createTodo(user_id: number, title: string, description: string) {
    try{
        const res=await prisma.todos.create({
            data:{
                title,
                description,
                user_id
            }
        })
        return res;
    }catch(e){
        console.log("erro while creating todo"+e);
        return null;
    }
}

export async function getTodos(user_id: number) {
    try{
        const res=await prisma.todos.findMany({
            where:{
                user_id
            }
        })
        return res;
    }catch(e){
        return null;
    }
}

export async function updateTodoDone(id:number,done:boolean) {
    try{
       const res=await prisma.todos.update({
        where:{
            id
        },
        data:{
            done
        }
       })
    }catch(e){
        console.log("failed to get user and tods combind");
    }
}
export async function removeTodo(id:number) {
    try{
        await prisma.todos.delete({
            where:{
                id
            }
        })
     }catch(e){
         console.log("failed to delete Todo");
     }
}

//-----------------------------------------------------------------------------------------------------------

// export async function getTodosAndUserDetails(user_id: number, ) {
//     try{
//         const res=await prisma.todos.findMany({
//             where:{
//                 user_id
//             },
//             select:{
//                 user:true,
//                 title:true,
//                 description:true
//             }
//         })
//     }catch(e){
//         console.log("failed to get user and tods combind");
//     }
// }

// export async function getAll() {
//     const res=await prisma.user.findMany();    
// }