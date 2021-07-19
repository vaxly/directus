import { LANGUAGES } from '../constants';
import { Language, LanguageShort } from '../types';

export function isLanguage(language: string): language is Language {
	return (LANGUAGES as readonly string[]).includes(language);
}

export function languageToShort(language: Language): LanguageShort {
	if (language === 'javascript') {
		return 'js';
	} else {
		return 'ts';
	}
}
