import { OperationOutcome, code } from './typings/aidbox';

interface GenerateOperationOutcomeArgs {
    diagnostics: string;
    code?: code;
    severity?: code;
    resource?: Partial<OperationOutcome>;
}
export function generateOperationOutcome(args: GenerateOperationOutcomeArgs): OperationOutcome {
    const { code = 'error', severity = 'fatal', diagnostics, resource } = args;
    return {
        resourceType: 'OperationOutcome',
        issue: [{ code, diagnostics, severity }],
        ...resource,
    };
}
