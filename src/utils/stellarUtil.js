import axios from "axios";

const StellarSdk = window.StellarSdk;

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

const createKeypair = () => {
    // create new and unique key pair
    const keypair = StellarSdk.Keypair.random();
    return {
        publicKey: keypair.publicKey(),
        secret: keypair.secret()
    }
}

const createWallet = async (publicKey) => {
    return await axios.get(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`
    ).then(response => {
        return response.data
    }).catch(error => {
        alert("createWallet error")
        console.log("error, ", error)
        throw Error("createWallet error:")
    })
}

const getAccount = async (publicKey) => {
    try {
        return await server.accounts().accountId(publicKey).call();
    } catch (error) {
        return error;
    }
}

export default {
    createKeypair,
    createWallet,
    getAccount
}

