class ResponseError extends Error {
  constructor(public status: number, public info: string) {
    super("An error occurred while communicating with the Lemontree Platform.");
  }
}

export default ResponseError;
