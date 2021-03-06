import { SplitPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from '@angular/testing';

describe('SplitPipe', () => {
    
    let pipe: SplitPipe;
    
    beforeEach(() => {
       pipe = new SplitPipe(); 
    });
    
    
    it('Should return splitted string as an array', () => {
       
        const result = pipe.transform('abc', 'b');
        expect(result).toEqual(['a', 'c']);
    });
    
    it('Should return splitted string as an array', () => {
       
        const result = pipe.transform('abc', 'b', 0);
        expect(result).toEqual([]);
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1, [null])).toEqual(1); 
    });
   
});