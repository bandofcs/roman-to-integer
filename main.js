/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman ={'I':1,
                    'V':5,
                    'X':10,
                    'L':50,
                    'C':100,
                    'D':500,
                    'M':1000};
    var result=0;
    var previous='M';
    for (let i=0;i<s.length;i++){
        result+=roman[s[i]];
        if (roman[s[i]]>roman[previous]&&i!=0){
            result-=(2*roman[previous]);
        }
        previous=s[i];
    }
    return result;
};
