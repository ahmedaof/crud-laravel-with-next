<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Repositories\interfaces\ContactRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ContactController extends Controller
{
    private ContactRepositoryInterface $contactRepository;

    public function __construct(ContactRepositoryInterface $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    public function index(): JsonResponse
    {
        return response()->json([
            'data' => $this->contactRepository->getAllContacts()
        ]);
    }

    public function store(ContactRequest $request): JsonResponse
    {
        $validated = $request->validated();

        return response()->json(
            [
                'data' => $this->contactRepository->createContact($validated)
            ],
            Response::HTTP_CREATED
        );
    }

    public function show(Request $request): JsonResponse
    {
        $ContactId = $request->route('id');
        $contact = $this->contactRepository->getContactById($ContactId);
        if (!$contact) {
            return response()->json([
                'error' => 'Contact not found'
            ], Response::HTTP_NOT_FOUND);
        } else {
            return response()->json([
                'data' => $contact
            ]);
        }
    }

    public function update(ContactRequest $request): JsonResponse
    {
        $ContactId = $request->id;
        $validated = $request->validated();

        return response()->json([
            'data' => $this->contactRepository->updateContact($ContactId, $validated)
        ]);
    }

    public function destroy(Request $request): JsonResponse
    {
        $ContactId = $request->id;
        $contact = $this->contactRepository->deleteContact($ContactId);

        if (!$contact) {
            return response()->json([
                'error' => 'Contact not found',
                'success' => 'false'
            ], Response::HTTP_NOT_FOUND);
        };
        return response()->json([
            'data' => 'Contact deleted',
            'success' => 'true'
        ], Response::HTTP_OK);
    }
}
