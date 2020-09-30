'use strict'

const chai = require('chai')
const expect = chai.expect

const gl = require('../index')
describe('Tools', () => {
  describe('toGreek', () => {
    describe('Given a greeklish text starting with a capital letters', () => {
      it('should convert the text and retain the capital letters', () => {
        const GREEKLISH_TEXT = 'XAMENES MESA sta bathoi tou Amazoniou zoun kapoies prwtogones fyles.'
        const GREEK_TEXT = 'ΧΑΜΕΝΕΣ ΜΕΣΑ στα βαθοι του Αμαζονιου ζουν καποιες πρωτογονες φυλες.'

        const convertedText = gl.toGreek(GREEKLISH_TEXT)

        expect(convertedText).to.be.eql(GREEK_TEXT)
      })
    })

    describe('Given a greeklish text panctuation marks', () => {
      it('should convert the text and retain the punctuation marks', () => {
        const GREEKLISH_TEXT = 'Zoun se "prwtogones" syn8hkes, sxedon gymnoi kai menoun se... kalybes pou exoun (ftiaksei) apo kladia kai fylla dentrwn!'
        const GREEK_TEXT = 'Ζουν σε "πρωτογονες" συνθηκες, σχεδον γυμνοι και μενουν σε... καλυβες που εχουν (φτιαξει) απο κλαδια και φυλλα δεντρων!'

        const convertedText = gl.toGreek(GREEKLISH_TEXT)

        expect(convertedText).to.be.eql(GREEK_TEXT)
      })
    })

    describe('Given a greeklish text that includes final sigma', () => {
      it('should convert the text and retain the final sigma', () => {
        const GREEKLISH_TEXT = 'Zoun se prwtogones synthhkes.'
        const GREEK_TEXT = 'Ζουν σε πρωτογονες συνθηκες.'

        const convertedText = gl.toGreek(GREEKLISH_TEXT)

        expect(convertedText).to.be.eql(GREEK_TEXT)
      })
    })

    describe('Given a greeklish text with English question mark', () => {
      it('should convert the text and replace the English question mark with the Greek one', () => {
        const GREEKLISH_TEXT = 'Zoun se prwtogones synthhkes?'
        const GREEK_TEXT = 'Ζουν σε πρωτογονες συνθηκες;'

        const convertedText = gl.toGreek(GREEKLISH_TEXT)

        expect(convertedText).to.be.eql(GREEK_TEXT)
      })
    })

    describe('Given a greeklish text that includes numbers', () => {
      it('should convert the text and keep the numbers', () => {
        const GREEKLISH_TEXT = 'To etos 2000'
        const GREEK_TEXT = 'Το ετος 2000'

        const convertedText = gl.toGreek(GREEKLISH_TEXT)

        expect(convertedText).to.be.eql(GREEK_TEXT)
      })
    })

    describe('Given a number', () => {
      it('should throw an error', () => {
        const RANDOM_NUMBER = 123

        expect(() => gl.toGreek(RANDOM_NUMBER)).to.throw()
      })
    })

    describe('Given an empty string', () => {
      it('should throw an error', () => {
        const GREEKLISH_TEXT = ''

        expect(() => gl.toGreek(GREEKLISH_TEXT)).to.throw()
      })
    })
  })

  describe('toGreeklish', () => {
    describe('Given a Greek text starting with a capital letters', () => {
      it('should convert the text and retain the capital letters', () => {
        const GREEK_TEXT = 'ΧΑΜΕΝΕΣ ΜΕΣΑ στα βαθοι του Αμαζονιου ζουν καποιες πρωτογονες φυλες.'
        const GREEKLISH_TEXT = 'XAMENES MESA sta bathoi tou Amazoniou zoun kapoies prwtogones fyles.'

        const convertedText = gl.toGreeklish(GREEK_TEXT)

        expect(convertedText).to.be.eql(GREEKLISH_TEXT)
      })
    })
    describe('Given a Greek text panctuation marks', () => {
      it('should convert the text and retain the punctuation marks', () => {
        const GREEK_TEXT = 'Ζουν σε "πρωτογονες" συνθηκες, σχεδον γυμνοι και μενουν σε... καλυβες που εχουν (φτιαξει) απο κλαδια και φυλλα δεντρων!'
        const GREEKLISH_TEXT = 'Zoun se "prwtogones" syn8hkes, sxedon gymnoi kai menoun se... kalybes pou exoun (ftiaksei) apo kladia kai fylla dentrwn!'

        const convertedText = gl.toGreeklish(GREEK_TEXT)

        expect(convertedText).to.be.eql(GREEKLISH_TEXT)
      })
    })
    describe('Given a Greek text that includes final sigma', () => {
      it('should convert the text and retain the final sigma', () => {
        const GREEK_TEXT = 'Ζουν σε πρωτογονες συνθηκες.'
        const GREEKLISH_TEXT = 'Zoun se prwtogones syn8hkes.'

        const convertedText = gl.toGreeklish(GREEK_TEXT)

        expect(convertedText).to.be.eql(GREEKLISH_TEXT)
      })
    })

    describe('Given a Greek text with English question mark', () => {
      it('should convert the text and replace the Greek question mark with the English one', () => {
        const GREEK_TEXT = 'Ζουν σε πρωτογονες συνθηκες;'
        const GREEKLISH_TEXT = 'Zoun se prwtogones syn8hkes?'

        const convertedText = gl.toGreeklish(GREEK_TEXT)

        expect(convertedText).to.be.eql(GREEKLISH_TEXT)
      })
    })

    describe('Given a Greek text that includes numbers', () => {
      it('should convert the text and keep the numbers', () => {
        const GREEK_TEXT = 'Το ετος 2000'
        const GREEKLISH_TEXT = 'To etos 2000'

        const convertedText = gl.toGreeklish(GREEK_TEXT)

        expect(convertedText).to.be.eql(GREEKLISH_TEXT)
      })
    })

    describe('Given a number', () => {
      it('should throw an error', () => {
        const RANDOM_NUMBER = 123

        expect(() => gl.toGreeklish(RANDOM_NUMBER)).to.throw()
      })
    })

    describe('Given an empty string', () => {
      it('should throw an error', () => {
        const GREEK_TEXT = ''

        expect(() => gl.toGreek(GREEK_TEXT)).to.throw()
      })
    })
  })
})
