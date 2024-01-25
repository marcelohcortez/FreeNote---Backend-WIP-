import mongoose from "mongoose";
import { Request, Response } from "express";

import Project from "../models/projectModel";
import { Project as ProjectType }  from "../types";

// get all projects
const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// get single project
const getProject = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No project with that id');
    }

    try {
        const project = await Project.findById(id);
        res.status(200).json(project);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// create project
const createProject = async (req: Request, res: Response) => {
    const project: Partial<ProjectType> = req.body;

    const requiredFields: (keyof ProjectType)[] = ["name", "description", "budget", "client", "project_status", "created_by"];
    const emptyFields: (keyof ProjectType)[] = requiredFields.filter(field => !project[field]);

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    // add doc to DB
    try {
        const newProject = await Project.create(project)
        res.status(200).json(newProject)
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// delete project
const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No project with that id');
    }

    try {
        const project = await Project.findOneAndDelete({_id: id});
        res.status(200).json(project);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

// update project
const updateProject = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No project with that id');
    }

    try {
        const project = await Project.findOneAndUpdate({_id: id}, {...req.body});
        res.status(200).json(project);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

export { getProjects, getProject, createProject, deleteProject, updateProject }