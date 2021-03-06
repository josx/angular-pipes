import { TrimPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from '@angular/testing';

describe('TrimPipe', () => {
    
    let pipe: TrimPipe;
    
    beforeEach(() => {
       pipe = new TrimPipe(); 
    });
    
    
    it('Should return trimmed string', () => {
       
        const result = pipe.transform('  aaa   ');
        expect(result).toEqual('aaa');
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1)).toEqual(1); 
    });
    
   
});