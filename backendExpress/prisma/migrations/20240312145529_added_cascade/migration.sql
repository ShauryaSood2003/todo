-- DropForeignKey
ALTER TABLE "Todos" DROP CONSTRAINT "Todos_user_id_fkey";

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
