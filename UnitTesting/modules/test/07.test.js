import { rgbToHexColor } from  "../07"
import { describe,it, expect, test } from "vitest";

describe("TESTING FUNCTION RGBTOHEX COLOR", ()=>{
    it("converts black to hex", ()=>{
        expect(rgbToHexColor(0,0,0)).toBe('#000000');
    })
    it("converts white to hex", ()=>{
        expect(rgbToHexColor(255,255,255)).toBe('#FFFFFF');
    })
    it(" red is  string return undifined", ()=>{
        expect(rgbToHexColor("sad",255,255)).toBe(undefined);
    })
    it(" red is  negative num ", ()=>{
        expect(rgbToHexColor(-20,255,255)).toBe(undefined);
    })
    it(" green is  negative num ", ()=>{
        expect(rgbToHexColor(20,-255,255)).toBe(undefined);
    })
    it(" blue is  negative num ", ()=>{
        expect(rgbToHexColor(20,255,-255)).toBe(undefined);
    })
    it("converting 151, 104,172 to hex", ()=>{
        expect(rgbToHexColor(151,104,172)).toBe('#9768AC');
    })
    it("converting 123, 123,123 to hex", ()=>{
        expect(rgbToHexColor(151,104,172)).toBe('#7B7B7B');
    })
})