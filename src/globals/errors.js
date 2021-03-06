// @flow

export const ErrorCode: { [string]: string } = Object.freeze({
    DUPLICATE_ALPHABET_VALS:   "E-001",
    DUPLICATE_STATE_NAMES:  "E-002",
    INVALID_STATE_NAME: "E-003",
    START_STATE_NOT_FOUND: "E-004",
    ACCEPTS_NOT_SUBSET: "E-005",
    ORIGIN_STATE_NOT_FOUND: "E-006",
    DEST_STATE_NOT_FOUND: "E-007",
    MISSING_REQUIRED_TRANSITION: "E-008",
    INVALID_INPUT_CHAR: "E-009",
    INPUT_STATE_NOT_FOUND: "E-010",
    INVALID_TRANSITION_OBJECT: "E-011"
});