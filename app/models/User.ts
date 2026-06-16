import { Schema, model, type HydratedDocument, type InferSchemaType } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
            minlength: 6,
        },
    },
    { timestamps: true }
);

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;

    this.password = await bcrypt.hash(this.password, 10);
});

export type IUser = HydratedDocument<InferSchemaType<typeof userSchema>>;
export const User = model('User', userSchema);
