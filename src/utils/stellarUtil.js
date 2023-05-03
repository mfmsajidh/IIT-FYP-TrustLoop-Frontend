import axios from "axios";

const StellarSdk = window.StellarSdk;

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

export default {
    createKeypair,
    createWallet
}

