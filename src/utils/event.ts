type EventType = React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>;

function extractElementFromEvent(event: EventType, selector: string): HTMLElement | null {
  const target = event.target as Element;
  return target.closest(selector);
}

export default extractElementFromEvent;
