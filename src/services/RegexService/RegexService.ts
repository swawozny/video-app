export class RegexService {
    static getMatchingString(matchingText: string, regex: string, position: number) {
        const matchStringArray = matchingText.match(regex);
        return matchStringArray ? matchStringArray[position] : "";
    }
}
