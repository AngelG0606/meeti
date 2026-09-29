import { communityRepository } from "@/src/features/communities/services/CommunityRepository";
import { requireAuth } from "@/src/lib/auth-server";
import Heading from "@/src/shared/components/typography/Heading";
import { redirect } from "next/navigation";

export default async function EditCommunityPage(props : PageProps<'/dashboard/communities/[id]/edit'>) {

    const { session } = await requireAuth()
    if(!session) redirect('/auth/login')

    const { id } = await props.params

    const community = await communityRepository.findById(id)

    console.log(community)

  return (
    <>
        <Heading>Editar Comunidad {community.name}</Heading>
    </>
  )
}