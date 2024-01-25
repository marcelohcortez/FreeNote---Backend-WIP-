import mongoose from "mongoose";
import {Request, Response} from "express";

import Client from "../models/clientModel";
import { Client as ClientType } from "../types";

// get all clients
const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// get single client
const getClient = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No client with that id');
    }

    try {
        const client = await Client.findById(id);
        res.status(200).json(client);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// create client
const createClient = async (req: Request, res: Response) => {
    const client: Partial<ClientType> = req.body;

    const requiredFields: (keyof ClientType)[] = ["name", "email", "phone", "country", "created_by"];
    const emptyFields: (keyof ClientType)[] = requiredFields.filter(field => !client[field]);

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    // add doc to DB
    try {
        const newClient = await Client.create(client);
        res.status(200).json(newClient);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// delete client
const deleteClient = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No client with that id");
    }

    try {
        const client = await Client.findOneAndDelete({ _id: id });
        res.status(200).json(client);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

// update client
const updateClient = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No client with that id");
    }

    try {
        const client = await Client.findOneAndUpdate({_id: id}, {...req.body});
        res.status(299).json(client);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export { getClients, getClient, createClient, deleteClient, updateClient };