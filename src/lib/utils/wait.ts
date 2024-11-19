export async function wait(duration: number = 0) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
