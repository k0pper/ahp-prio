import { Criteria } from "./Criteria";

export interface Comparison {
    requirementA: Criteria;
    requirementB: Criteria;
    result?: string;
} 