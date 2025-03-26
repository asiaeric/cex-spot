import { z } from "zod";
import { SignInSchema, SignUpSchema, UserProfileSchema, UserSchema } from "../schemas";
type User = z.infer<typeof UserSchema>;
type SignInDTO = z.infer<typeof SignInSchema>;
type SignUpDTO = z.infer<typeof SignUpSchema>;
type UserProfile = z.infer<typeof UserProfileSchema>;
export { SignInDTO, SignUpDTO, User, UserProfile };
//# sourceMappingURL=user.d.ts.map