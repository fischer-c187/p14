type EventType =
  | React.KeyboardEvent<Element>
  | React.MouseEvent<Element, MouseEvent>;

function extractElementFromEvent(
  event: EventType,
  selector: string
): HTMLElement | null {
  const target = event.target as Element;
  return target.closest(selector);
}

export const debounce = (
  mainFunction: (...args: any[]) => void,
  delay: number
): ((...args: any[]) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: any[]): void {
    clearTimeout(timer);
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

export default extractElementFromEvent;
