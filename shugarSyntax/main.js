function StringFormat(text, dict) {
    while(text.indexOf('{') > 0){
        var startIndex = text.indexOf('{');
        var endIndex =text.indexOf('}');    
        var key = text.slice(startIndex+1,endIndex);
        console.log(key);
        var replacement;
        try {
            replacement = dict[key];    
            console.log(replacement);
        } catch (error) {
            throw error;
        }
        text = text.replace('{'+key+'}',replacement);
        console.log(text);
    }
    return text;
}
