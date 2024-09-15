import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, StatusBar, Alert } from 'react-native';

export const Tasks = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const deleteTask = (idTask) => {
        setTasks(tasks.filter((task) => task.idTask !== idTask));
    };

    const addTask = () => {
        // Por recomendación hice que el id de cada lista fuera el Date now porque de esta forma siempre tendré un registro unico
        if (task.trim() !== '') {
            setTasks([...tasks, { idTask: Date.now().toString(), text: task }]);
            setTask('');
        } else {
            Alert.alert('Error', `El campo no puede ir vacío`)
        }
    };

    const showListTasks = ({ item }) => (
        <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.idTask)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Gestor de Tareas</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={task}
                        onChangeText={setTask}
                        placeholder="Nueva tarea..."
                    />
                    <TouchableOpacity onPress={addTask} style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={tasks}
                    renderItem={showListTasks}
                    keyExtractor={(item) => item.idTask}
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    header: {
        backgroundColor: '#2c3e50',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 25,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    addButton: {
        backgroundColor: '#3498db',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    addButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    list: {
        flex: 1,
    },
    listContent: {
        paddingBottom: 20,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    taskText: {
        flex: 1,
        fontSize: 16,
        color: '#34495e',
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
