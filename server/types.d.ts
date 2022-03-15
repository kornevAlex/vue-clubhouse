import { UserData } from "~/types/types";

declare global {
    namespace Express {
        interface User extends UserData{
        }
    }
}
