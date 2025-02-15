import { ingredientsData } from '../src/data/ingredients';
import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient'

describe('Ingredient Test', () => {

    it('Should be a function', () => {
        expect(Ingredient).to.be.a('function');
    })

    it('Should be an instance of Ingredient', () => {
        const ingredient = new Ingredient(ingredientsData[0])
        expect(ingredient).to.be.an.instanceOf(Ingredient)
    })
})