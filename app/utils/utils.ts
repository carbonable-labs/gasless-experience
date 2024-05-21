export function minifyAddress(address: string): string {
    return address.length > 24 ? `${address.substring(0, 8)} ... ${address.substring(address.length - 8, address.length)}` : address;
}

declare global {
    interface BigInt {
        /** Convert to BigInt to string form in JSON.stringify */
        toJSON: () => string;
    }
}

BigInt.prototype.toJSON = function () {
    return this.toString();
};
