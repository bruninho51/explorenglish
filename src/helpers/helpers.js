export const extractWordsFromSentence = (sentence) => {
    return sentence.split(' ').map(word => word.trim()).filter(word => !!word)
}