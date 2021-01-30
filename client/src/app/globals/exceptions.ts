export class InvalidDataException extends Error {
  constructor(public message: string) {
    super(message);
  }
}
