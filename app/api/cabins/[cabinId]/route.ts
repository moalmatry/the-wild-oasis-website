import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(
  _: Request,
  response: { params: { cabinId: string } }
) {
  const { cabinId } = response.params;

  try {
    const [cabin, bookedCabin] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({
      cabin,
      bookedCabin,
    });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
