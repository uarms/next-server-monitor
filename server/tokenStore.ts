import { randomBytes } from 'crypto';

function generateRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(randomBytes(1)[0] / 256 * charactersLength));
    }

    return result;
}

const availableTokens: string[] = [];

export function storeToken(token: string) {
    availableTokens.push(token);
}

export function newToken(): string {
    return generateRandomString(64)
}

export function isTokenValid(token: string): boolean {
    return availableTokens.includes(token);
}