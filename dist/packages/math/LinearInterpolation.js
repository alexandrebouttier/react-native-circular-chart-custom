// this linear interpolation is suppoprt only clamp.
export function LinearInterpolation(_a) {
    var value = _a.value, inputRange = _a.inputRange, outputRange = _a.outputRange;
    var minInputRange = Math.min.apply(Math, inputRange);
    var maxInputRange = Math.max.apply(Math, inputRange);
    var minOutPutRange = Math.min.apply(Math, outputRange);
    var maxOutPutRange = Math.max.apply(Math, outputRange);
    if (value > maxInputRange) {
        return maxOutPutRange;
    }
    else if (value < minInputRange) {
        return minOutPutRange;
    }
    var percentage = getPercentageRange({
        value: value,
        min: minInputRange,
        max: maxInputRange,
    });
    // formula: (1 - percentage) * min + percentage * max; 😎
    return (1 - percentage) * minOutPutRange + percentage * maxOutPutRange;
}
function getPercentageRange(_a) {
    //formula calclate percentange by range ((input - min) * 100) / (max - min) 😎
    var value = _a.value, min = _a.min, max = _a.max;
    // return between 0 -> 1
    return ((value - min) * 100) / (max - min) / 100;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZWFySW50ZXJwb2xhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWNrYWdlcy9tYXRoL0xpbmVhckludGVycG9sYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUNwRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsRUFRbkM7UUFQQyxLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsV0FBVyxpQkFBQTtJQU1YLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxFQUFRLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxFQUFRLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxFQUFRLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxFQUFRLFdBQVcsQ0FBQyxDQUFDO0lBRWhELElBQUksS0FBSyxHQUFHLGFBQWEsRUFBRTtRQUN6QixPQUFPLGNBQWMsQ0FBQztLQUN2QjtTQUFNLElBQUksS0FBSyxHQUFHLGFBQWEsRUFBRTtRQUNoQyxPQUFPLGNBQWMsQ0FBQztLQUN2QjtJQUVELElBQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLEtBQUssT0FBQTtRQUNMLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLEdBQUcsRUFBRSxhQUFhO0tBQ25CLENBQUMsQ0FBQztJQUVILHlEQUF5RDtJQUN6RCxPQUFPLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLGNBQWMsR0FBRyxVQUFVLEdBQUcsY0FBYyxDQUFDO0FBQ3pFLENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLEVBUTNCO0lBQ0MsOEVBQThFO1FBUjlFLEtBQUssV0FBQSxFQUNMLEdBQUcsU0FBQSxFQUNILEdBQUcsU0FBQTtJQVFILHdCQUF3QjtJQUN4QixPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ25ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGxpbmVhciBpbnRlcnBvbGF0aW9uIGlzIHN1cHBvcHJ0IG9ubHkgY2xhbXAuXG5leHBvcnQgZnVuY3Rpb24gTGluZWFySW50ZXJwb2xhdGlvbih7XG4gIHZhbHVlLFxuICBpbnB1dFJhbmdlLFxuICBvdXRwdXRSYW5nZSxcbn06IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgaW5wdXRSYW5nZTogW251bWJlciwgbnVtYmVyXTtcbiAgb3V0cHV0UmFuZ2U6IFtudW1iZXIsIG51bWJlcl07XG59KSB7XG4gIGNvbnN0IG1pbklucHV0UmFuZ2UgPSBNYXRoLm1pbiguLi5pbnB1dFJhbmdlKTtcbiAgY29uc3QgbWF4SW5wdXRSYW5nZSA9IE1hdGgubWF4KC4uLmlucHV0UmFuZ2UpO1xuICBjb25zdCBtaW5PdXRQdXRSYW5nZSA9IE1hdGgubWluKC4uLm91dHB1dFJhbmdlKTtcbiAgY29uc3QgbWF4T3V0UHV0UmFuZ2UgPSBNYXRoLm1heCguLi5vdXRwdXRSYW5nZSk7XG5cbiAgaWYgKHZhbHVlID4gbWF4SW5wdXRSYW5nZSkge1xuICAgIHJldHVybiBtYXhPdXRQdXRSYW5nZTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8IG1pbklucHV0UmFuZ2UpIHtcbiAgICByZXR1cm4gbWluT3V0UHV0UmFuZ2U7XG4gIH1cblxuICBjb25zdCBwZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZVJhbmdlKHtcbiAgICB2YWx1ZSxcbiAgICBtaW46IG1pbklucHV0UmFuZ2UsXG4gICAgbWF4OiBtYXhJbnB1dFJhbmdlLFxuICB9KTtcblxuICAvLyBmb3JtdWxhOiAoMSAtIHBlcmNlbnRhZ2UpICogbWluICsgcGVyY2VudGFnZSAqIG1heDsg8J+YjlxuICByZXR1cm4gKDEgLSBwZXJjZW50YWdlKSAqIG1pbk91dFB1dFJhbmdlICsgcGVyY2VudGFnZSAqIG1heE91dFB1dFJhbmdlO1xufVxuXG5mdW5jdGlvbiBnZXRQZXJjZW50YWdlUmFuZ2Uoe1xuICB2YWx1ZSxcbiAgbWluLFxuICBtYXgsXG59OiB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbn0pOiBudW1iZXIge1xuICAvL2Zvcm11bGEgY2FsY2xhdGUgcGVyY2VudGFuZ2UgYnkgcmFuZ2UgKChpbnB1dCAtIG1pbikgKiAxMDApIC8gKG1heCAtIG1pbikg8J+YjlxuXG4gIC8vIHJldHVybiBiZXR3ZWVuIDAgLT4gMVxuICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgKiAxMDApIC8gKG1heCAtIG1pbikgLyAxMDA7XG59XG4iXX0=