import EditCommunity from "@/src/features/communities/components/EditCommunity";
import { communityService } from "@/src/features/communities/services/CommunityService";
import { requireAuth } from "@/src/lib/auth-server";
import Heading from "@/src/shared/components/typography/Heading";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EditCommunityPage(props: PageProps<'/dashboard/communities/[id]/edit'>) {

  const { session } = await requireAuth()
  if (!session) redirect('/auth/login')

  const { id } = await props.params
  const community = await communityService.getCommunityDetails(id, session.user)

  if (!community.permissions.canEdit) redirect('/dashboard/communities')


  return (
    <>
      <Heading>Editar Comunidad {community.data.name}</Heading>

      <Link
        href="/dashboard/communities"
        className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold"
      >Volver a mis Comunidades</Link>

      <EditCommunity
        community={community.data}
      />
    </>
  )
}