import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToDo } from '../types/Todo';

const STORAGE_KEY = 'todos';

export const saveTodos = async (todos: ToDo[]) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
        console.log('Failed to save todos', e);
    }
};

export const loadTodos = async (): Promise<ToDo[]> => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.log('Failed to load todos', e);
        return [];
        }
    }