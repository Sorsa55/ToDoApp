import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import FilterButton from './components/FilterButton';
import { loadTodos, saveTodos } from '../src/utilis/storage';
import { use, useEffect, useState } from 'react';
import { ToDo } from './types/Todo';
import { FlatList } from 'react-native';
import TodoItem from './components/TodoItem';
import Header from './components/header';

type Filter = 'all' | 'active' | 'completed';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    loadTodos().then(setTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: ToDo = {
      id: Date.now(),
      title: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        placeholder="add a new todo.."
        value={text}
        onChangeText={setText}
        style={styles.textInput}
      />

      <Button title="add" onPress={addTodo} />

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() => toggleTodo(item.id)}
            onDelete={() => deleteTodo(item.id)}
          />
        )}
      />

      <FilterButton current={filter} setFilter={setFilter} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07113d',
    padding: 24,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderColor: '#d3d2d6',
    backgroundColor: '#fff',
  },
});