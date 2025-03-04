import { Site, Status, Test, Type } from '../types/types';

export function checkDone(status: Status) {
    if (status === 'DRAFT') {
        return 'Finalize'
    } else {
        return 'Results'
    }
}

export function statusFromUpperCase(status: Status) {
    switch (status) {
        case 'ONLINE':
            return 'Online';
        case 'DRAFT':
            return 'Draft';
        case 'PAUSED':
            return 'Paused';
        case 'STOPPED':
            return 'Stopped';
        default:
            return status;
    }
}

export function typeFromUpperCase(type: Type) {
    switch (type) {
        case 'CLASSIC':
            return 'Classic';
        case 'SERVER_SIDE':
            return 'Server-side';
        default:
            return type;
    }
}

export function getUrlBySiteId(siteId: number, sites: Site[]) {
    const site = sites.find((s) => s.id === siteId);

    if (site) {
        const cleanedUrl = site.url.replace(/^(https?:\/\/(www\.)?)/, '');
        return cleanedUrl;
    }

    return null;
}

export const sortedListByName = (tests: Test[], ascending: boolean): Test[] => {
    return [...tests].sort((a, b) => {
        const asc = a.name.toUpperCase();
        const desc = b.name.toUpperCase();
        return ascending ? asc.localeCompare(desc) : desc.localeCompare(asc);
    });
}

export const sortedListByType = (tests: Test[], ascending: boolean): Test[] => {
    return [...tests].sort((a, b) => {
        const asc = a.type.toUpperCase();
        const desc = b.type.toUpperCase();
        return ascending ? asc.localeCompare(desc) : desc.localeCompare(asc);
    });
}

export const sortedListBySite = (tests: Test[], ascending: boolean, sites: Site[]): Test[] => {
    return [...tests].sort((a, b) => {
        const asc = (getUrlBySiteId(a.siteId, sites))!.toUpperCase();
        const desc = (getUrlBySiteId(b.siteId, sites))!.toUpperCase();
        return ascending ? asc.localeCompare(desc) : desc.localeCompare(asc);
    });
}
